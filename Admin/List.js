import { List, ListAction, Text, post, app } from '@List'
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const listActions = () => {
    const syncUsers = ({ setProgress, reloadList }) => {
        setProgress(true);
        post('/User/sync').then(data => {
            reloadList();
            setProgress(false);
            app.success('Users are synced');
        }, error => {
            setProgress(false);
            app.error(error);
        })
    };

    return <>
        <ListAction
            title='Sync'
            icon={SyncAltIcon}
            click={(params) => syncUsers(params)} />
    </>
}

const filters = <>
    <Text
        column='FirstName'
        placeholder='Name'
    />
</>

const sorts = [
    {
        column: 'Name',
        direction: 'asc',
        caption: 'Name, A-Z'
    },
    {
        column: 'Name',
        direction: 'desc',
        caption: 'Name, Z-A'
    }
]

const headers =
    <>
        <th>Display Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>LastSyncDate</th>
    </>

const row = (item) => {
    return <>
        <td>{item.displayName}</td>
        <td>{item.userName}</td>
        <td>{item.email}</td>
        <td>{item.lastSyncDate}</td>
    </>
}

const Users = () => {
    return <List
        title='Users'
        entity='user'
        headers={headers}
        row={row}
        filters={filters}
        sorts={sorts}
        listActions={listActions}
    />
};

export default Users;