import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { supabase } from '../lib/supabase';
import { Search, Plus, Loader, Filter, Package } from 'lucide-react';

export const Library = () => {
  const { user } = useAuth();
  const { success, error: showError } = useToast();
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [error, setError] = useState('');
  const [addingTool, setAddingTool] = useState(null);

  const categories = ['All', 'Productivity', 'Design', 'Development', 'Communication', 'Marketing', 'Other'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    fetchTools();
  }, []);

  useEffect(() => {
    filterTools();
  }, [searchQuery, selectedCategory, tools]);

  const fetchTools = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .order('name');

      if (error) throw error;
      setTools(data || []);
      setFilteredTools(data || []);
    } catch (err) {
      console.error('Error fetching tools:', err);
      setError(err.message);
      showError('Failed to load tools. Please refresh the page.');
    } finally {
      setLoading(false);
    }
  };

  const filterTools = () => {
    let filtered = tools;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTools(filtered);
  };

  const handleAddTool = async (tool) => {
    if (!user) {
      showError('Please sign in to add tools');
      return;
    }

    setAddingTool(tool.id);
    setError('');

    try {
      // Check if tool already added
      const { data: existing } = await supabase
        .from('user_tools')
        .select('*')
        .eq('user_id', user.id)
        .eq('tool_id', tool.id)
        .single();

      if (existing) {
        showError('Tool already in your collection');
        setAddingTool(null);
        return;
      }

      // Add tool to user's collection
      const { error: insertError } = await supabase
        .from('user_tools')
        .insert([
          {
            user_id: user.id,
            tool_id: tool.id,
            monthly_cost: 0,
          }
        ]);

      if (insertError) throw insertError;

      // Award points
      await awardPoints(5);
      
      success(`${tool.name} added! +5 points`);
    } catch (err) {
      console.error('Error adding tool:', err);
      showError(err.message || 'Failed to add tool. Please try again.');
      setError(err.message);
    } finally {
      setAddingTool(null);
    }
  };

  const awardPoints = async (points) => {
    try {
      const { data: existing } = await supabase
        .from('user_rewards')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (existing) {
        await supabase
          .from('user_rewards')
          .update({ 
            points: existing.points + points,
            total_earned: (existing.total_earned || 0) + points
          })
          .eq('user_id', user.id);
      } else {
        await supabase
          .from('user_rewards')
          .insert([{ 
            user_id: user.id, 
            points,
            total_earned: points
          }]);
      }
    } catch (err) {
      console.error('Error awarding points:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader className="animate-spin text-blue-600 mx-auto mb-4" size={48} />
          <p className="text-gray-600">Loading tools library...</p>
        </div>
      </div>
    );
  }

  if (error && tools.length === 0) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md">
          <Package className="mx-auto text-red-400 mb-4" size={48} />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to Load Tools</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={fetchTools}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tool Library</h1>
          <p className="text-gray-600 mt-2">Discover and add tools to your collection</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            {error}
          </div>
        )}

        {/* Tools Grid */}
        {filteredTools.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Package className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No tools found</h3>
            <p className="text-gray-600 mb-4">
              {searchQuery || selectedCategory !== 'All' 
                ? 'Try adjusting your search or filters' 
                : 'The library is empty. Check back later!'}
            </p>
            {(searchQuery || selectedCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-blue-600 hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="mb-4 text-gray-600">
              Showing {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{filteredTools.map((tool) => (
              <div key={tool.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900">{tool.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {tool.category}
                      </span>
                      {tool.pricing_model && (
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tool.pricing_model}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[3rem]">
                  {tool.description || 'No description available'}
                </p>
                {tool.website_url && (
                  <a
                    href={tool.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm mb-4 block"
                  >
                    Visit website →
                  </a>
                )}
                <button
                  onClick={() => handleAddTool(tool)}
                  disabled={addingTool === tool.id || !user}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {addingTool === tool.id ? (
                    <>
                      <Loader className="animate-spin" size={16} />
                      Adding...
                    </>
                  ) : (
                    <>
                      <Plus size={16} />
                      {user ? 'Add to Collection' : 'Sign in to Add'}
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
          </>
        )}
      </div>
    </div>
  );
};
