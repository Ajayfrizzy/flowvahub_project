import { X, CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Toast = () => {
  const { toasts, removeToast } = useToast();

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'error':
        return <XCircle className="w-5 h-5" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getColors = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 right-2 sm:right-4 z-[100] space-y-2 max-w-[calc(100vw-1rem)] sm:max-w-md">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border shadow-lg min-w-[250px] sm:min-w-[300px] animate-slideInFromRight ${getColors(toast.type)}`}
        >
          <div className="flex-shrink-0">
            {getIcon(toast.type)}
          </div>
          <p className="flex-1 text-xs sm:text-sm font-medium break-words">{toast.message}</p>
          <button
            onClick={() => removeToast(toast.id)}
            className="flex-shrink-0 hover:opacity-70 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
