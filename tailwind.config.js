export default { 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    maxWidth:{
      'container': '1320px',
    },
    colors: {
      'primary': '#',
      'sec': '#0',
      
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
