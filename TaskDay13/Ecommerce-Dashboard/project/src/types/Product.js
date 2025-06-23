// Product type definitions (using JSDoc for type hints)

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} title
 * @property {number} price
 * @property {string} description
 * @property {string} category
 * @property {string} image
 * @property {Object} rating
 * @property {number} rating.rate
 * @property {number} rating.count
 */

/**
 * @typedef {Object} Filters
 * @property {string} category
 * @property {number} minPrice
 * @property {number} maxPrice
 * @property {number} minRating
 * @property {string} search
 */

/**
 * @typedef {'price-asc' | 'price-desc' | 'rating' | 'name-asc' | 'name-desc'} SortOption
 */

export {};