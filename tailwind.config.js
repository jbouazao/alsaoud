module.exports = {
  content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {},
		backgroundImage: {
			"hero": "url('/assets/media/library.jpeg')"
		},
		fontFamily: {
			popLight: ["PoppinsLight"],
			popMed: ["PoppinsMed"],
			popReg: ["PoppinsReg"],
			popSBold: ["PoppinsSBold"],
			popBold: ["PoppinsBold"],
		},
  },
  plugins: [],
}
