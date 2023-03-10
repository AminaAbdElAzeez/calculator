import "./Button.css"

const Button = ({symbol , color , addToText}) => {
    return(
        <div className="button-wrapper" style={{backgroundColor : color}} onClick={() => addToText(symbol)}>
            {symbol}
        </div>
    );
}

export default Button;