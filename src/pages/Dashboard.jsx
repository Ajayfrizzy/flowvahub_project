import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { Plus, Trash2, Search, Loader, Package, Gift, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const { user } = useAuth();
  const [myTools, setMyTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTool, setNewTool] = useState({ name: '', category: '', cost: '' });
  const [error, setError] = useState('');
  const [totalRewards, setTotalRewards] = useState(0);

  useEffect(() => {
    fetchMyTools();
    fetchRewards();
  }, [user]);

  const fetchMyTools = async () => {
    try {
      const { data, error } = await supabase
        .from('user_tools')
        .select(`
          *,
          tools (*)
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMyTools(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchRewards = async () => {
    try {
      const { data, error } = await supabase
        .from('user_rewards')
        .select('points')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      setTotalRewards(data?.points || 0);
    } catch (err) {
      console.error('Error fetching rewards:', err);
    }
  };

  const handleAddTool = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // First, add tool to tools table
      const { data: toolData, error: toolError } = await supabase
        .from('tools')
        .insert([
          {
            name: newTool.name,
            category: newTool.category,
            description: `Custom tool added by user`,
          }
        ])
        .select()
        .single();

      if (toolError) throw toolError;

      // Then add to user_tools
      const { error: userToolError } = await supabase
        .from('user_tools')
        .insert([
          {
            user_id: user.id,
            tool_id: toolData.id,
            monthly_cost: parseFloat(newTool.cost) || 0,
          }
        ]);

      if (userToolError) throw userToolError;

      // Award points for adding a tool
      await awardPoints(10);

      setNewTool({ name: '', category: '', cost: '' });
      setShowAddModal(false);
      fetchMyTools();
      fetchRewards();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRemoveTool = async (userToolId) => {
    try {
      const { error } = await supabase
        .from('user_tools')
        .delete()
        .eq('id', userToolId);

      if (error) throw error;
      fetchMyTools();
    } catch (err) {
      setError(err.message);
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
          .update({ points: existing.points + points })
          .eq('user_id', user.id);
      } else {
        await supabase
          .from('user_rewards')
          .insert([{ user_id: user.id, points }]);
      }
    } catch (err) {
      console.error('Error awarding points:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <Loader className="animate-spin text-indigo-600" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.user_metadata?.full_name || 'User'}!
          </h1>
          <p className="text-gray-600 mt-2">Manage your tools and track your rewards</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">My Tools</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{myTools.length}</p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Package className="text-indigo-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Rewards</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{totalRewards}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Gift className="text-purple-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Monthly Cost</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  ${myTools.reduce((sum, t) => sum + (t.monthly_cost || 0), 0).toFixed(2)}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-green-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            <Plus size={20} />
            Add Tool
          </button>
          <Link
            to="/library"
            className="flex items-center gap-2 bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            <Search size={20} />
            Discover Tools
          </Link>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            {error}
          </div>
        )}

        {/* My Tools List */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">My Tools</h2>
          </div>
          
          {myTools.length === 0 ? (
            <div className="p-12 text-center">
              <Package className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No tools yet</h3>
              <p className="text-gray-600 mb-6">Start by adding your first tool or exploring our library</p>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Add Your First Tool
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {myTools.map((userTool) => (
                <div key={userTool.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div>
                    <h3 className="font-semibold text-gray-900">{userTool.tools?.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {userTool.tools?.category} • ${userTool.monthly_cost || 0}/month
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveTool(userTool.id)}
                    className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Tool Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-semibold mb-4">Add New Tool</h3>
            <form onSubmit={handleAddTool} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tool Name
                </label>
                <input
                  type="text"
                  value={newTool.name}
                  onChange={(e) => setNewTool({ ...newTool, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={newTool.category}
                  onChange={(e) => setNewTool({ ...newTool, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Productivity">Productivity</option>
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Communication">Communication</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Cost ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={newTool.cost}
                  onChange={(e) => setNewTool({ ...newTool, cost: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="0.00"
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Add Tool
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
