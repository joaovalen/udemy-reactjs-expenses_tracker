import './Card.css'

// props.children is a reserved name that will be the content between the opening and closing tags of the component you will be wrapping around 

// com a const classes garantimos que qualquer valor setado no className das props seja adiconado a string de classNames daquele componente. Dessa forma ele vai ser um <Card> por exemplo com o className "card expense-item__description", puxando corretamente todas as estilizações de css
const Card = (props) => {
    const classes = 'card ' + props.className
    return <div className={classes}>{props.children}</div>
}

export default Card;