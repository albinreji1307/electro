const SkeletonLoader = () => {
  return (
   <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-loader rounded-full"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;