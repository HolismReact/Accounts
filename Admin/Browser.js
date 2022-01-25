import { Browse, Text } from '@Browse';

const card = (item) => {
    return <>
        <div>{item.username}</div>
        <div>{item.dispalyName}</div>
    </>
}

const UserBrowser = () => {
    return <Browse
        entityType='user'
        card={card}
    />
}

export default UserBrowser;