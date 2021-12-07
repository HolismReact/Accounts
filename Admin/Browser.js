import { Browse, Text } from '@Browse';

const card = (item) => {
    return <>      
        <div>{item.displayName}</div>
        <div>{item.userName}</div>
    </>
}

const UserBrowser = () => {
    return <Browse
        entity='user'
        card={card}
    />
}

export default UserBrowser;