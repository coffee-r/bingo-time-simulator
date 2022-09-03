// スマホでhoverが残り続けてしまう問題を回避するためのフラグ員
const plugin = require('tailwindcss/plugin')
const hoverPlugin = plugin(({ addVariant, e, postcss }) => {
  addVariant('hover', ({ container, separator }) => {
    const hoverRule = postcss.atRule({
      name: 'media',
      params: '(hover: hover)',
    })
    hoverRule.append(container.nodes)
    container.append(hoverRule)
    hoverRule.walkRules((rule) => {
      rule.selector = `.${e(
        `hover${separator}${rule.selector.slice(1)}`
      )}:hover`
    })
  })
})

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    hoverPlugin,
    require('@tailwindcss/typography'),
  ],
}
