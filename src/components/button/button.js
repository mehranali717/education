const Button =(props)=> <button {...props} className={`${props.className} px-[24px] py-[8px] rounded-[4px] font-[700] bg-purple-500 text-[#fff] text-[15px] capitalize`}>{props.value}</button>
export default Button