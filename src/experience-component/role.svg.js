const roleSVG = (fill)=>{
    return  `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	width="34" fill="${fill ? `#${fill}` : "#165eff"}" height="30" viewBox="0 0 34 32">
    <path d="M18 5V1h-4v4H6v26h20V5h-8zm-2-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm8 27H8V7h6v2h4V7h6v22z" />
    <path
        d="M16 11c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm-4 4a2 2 0 0 0-2 2v2h12v-2a2 2 0 0 0-2-2h-8z" />
</svg>`
}


module.exports = roleSVG;



