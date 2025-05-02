import slantedDivStyles from  "./slantedDiv.module.scss"


const SlantedDiv = ({text}:{text: string}) => {
    return <p className={slantedDivStyles.title}>{text}</p>
}

export default SlantedDiv