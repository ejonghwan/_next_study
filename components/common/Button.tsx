interface Props {
    content: string;
    attr: {
        type: "button";
        style: object;
    }
    onClick: any;
}



const Button = ({ attr, content, onClick }: Props) => {
    return (
        <button {...attr} onClick={onClick}>{content}</button>
    )
}


export default Button;