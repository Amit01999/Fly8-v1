import React from 'react';

const StatusBadge = ({ status }) => {
  const styles = {
    draft: {
      bg: 'bg-gradient-to-r from-yellow-100 to-amber-100',
      text: 'text-yellow-800',
      border: 'border-yellow-300',
      icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
    },
    pending: {
      bg: 'bg-gradient-to-r from-orange-100 to-amber-100',
      text: 'text-orange-800',
      border: 'border-orange-300',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    published: {
      bg: 'bg-gradient-to-r from-green-100 to-emerald-100',
      text: 'text-green-800',
      border: 'border-green-300',
      icon: 'M5 13l4 4L19 7'
    },
    rejected: {
      bg: 'bg-gradient-to-r from-red-100 to-rose-100',
      text: 'text-red-800',
      border: 'border-red-300',
      icon: 'M6 18L18 6M6 6l12 12'
    },
  };

  const style = styles[status] || styles.draft;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${style.bg} ${style.text} border ${style.border} shadow-sm`}>
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={style.icon} />
      </svg>
      {status.toUpperCase()}
    </span>
  );
};

export default StatusBadge;
