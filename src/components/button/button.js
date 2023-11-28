const Button =(props)=> <button {...props} className={`${props.className} rounded-[4px] font-[700] bg-[#fff] text-[#4747d7] text-[15px] capitalize`}>{props.value}</button>
export default Button