export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString();
};

export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}_${Date.now()}`;
};

export const formatStatus = (status: string): string => {
  return status.replace('_', ' ');
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'open':
      return 'bg-green-100 text-green-800 border-green-300';
    case 'in_progress':
      return 'bg-amber-100 text-amber-800 border-amber-300';
    case 'closed':
      return 'bg-gray-100 text-gray-800 border-gray-300';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getPriorityColor = (priority?: string): string => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};