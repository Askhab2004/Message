

const message =[
    {
        Text: 'Привет',
        author: 'User',
        side: 'left'
    },
    {
        Text: 'Привет',
        author: 'Admin',
        side: 'right'
    },
    {
        Text: 'Привет',
        author: 'User',
        side: 'left'
    },
    {
        Text: 'Привет',
        author: 'User',
        side: 'left'
    },
]

const mess2 = message.map(item =>{
    return (
        <div className={`row ${item.side === "right" ? "justify-content-end" : ""}`}>
            <div className="col-5">
                <div className={`inbox p-2 rounded-3 text-white ${item.side === 'right' ? 'bg-success' : 'bg-primary'}`}>
                     {item.Text}
                     <div>
                        {item.author}
                     </div>
                     <bootton className="btn btn-danger">
                        X
                    </bootton> 
                </div>
            </div>
        </div>
    )
}) 

const mess = [
    <div className="row">
            <div className="col-5">
                <div className="inbox bg-primary p-2 rounded-3 text-white">
                     Привет
                     <div>
                        User
                     </div>
                </div>
            </div>
        </div>,

        <div className="row justify-content-end">
            <div className="col-5">
                <div className="outbox bg-success p-2 rounded-3 text-white">
                Как дела
                 <div>
                   Admin
                </div>
                </div>
            </div>
        </div>,

        <div className="row">
            <div className="col-5">
            <div className="inbox bg-primary p-2 rounded-3 text-white">
            Норм
            <div>
                User
            </div>
                </div>
            </div>
        </div>,
]

function Message() {
    return (
        {mess}
    );
  }
  
  export default Message;