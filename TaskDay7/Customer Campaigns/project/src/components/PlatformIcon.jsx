const PlatformIcon = ({ platform }) => {
  const getPlatformConfig = (platform) => {
    const configs = {
      Facebook: {
        color: 'bg-blue-600',
        textColor: 'text-white',
        icon: 'F'
      },
      Instagram: {
        color: 'bg-gradient-to-r from-purple-500 to-pink-500',
        textColor: 'text-white',
        icon: 'IG'
      },
      Twitter: {
        color: 'bg-blue-400',
        textColor: 'text-white',
        icon: 'T'
      },
      LinkedIn: {
        color: 'bg-blue-700',
        textColor: 'text-white',
        icon: 'in'
      },
      YouTube: {
        color: 'bg-red-600',
        textColor: 'text-white',
        icon: 'YT'
      },
      TikTok: {
        color: 'bg-black',
        textColor: 'text-white',
        icon: 'TT'
      }
    };

    return configs[platform] || {
      color: 'bg-gray-500',
      textColor: 'text-white',
      icon: platform.charAt(0)
    };
  };

  const config = getPlatformConfig(platform);

  return (
    <div className="flex items-center space-x-1">
      <div 
        className={`w-6 h-6 rounded-full ${config.color} ${config.textColor} flex items-center justify-center text-xs font-bold`}
        title={platform}
      >
        {config.icon}
      </div>
      <span className="text-sm text-gray-700">{platform}</span>
    </div>
  );
};

export default PlatformIcon;