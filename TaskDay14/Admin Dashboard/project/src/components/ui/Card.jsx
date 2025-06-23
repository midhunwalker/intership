import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  title, 
  subtitle,
  icon,
  animate = true,
  ...props 
}) => {
  const Component = animate ? motion.div : 'div';
  
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  } : {};

  return (
    <Component
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200 ${className}`}
      {...animationProps}
      {...props}
    >
      {(title || icon) && (
        <div className="flex items-center mb-4">
          {icon && (
            <div className="mr-3 p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
              {icon}
            </div>
          )}
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
      {children}
    </Component>
  );
};

export default Card;