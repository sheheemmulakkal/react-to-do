import './ListDropped.css'

const ListDropped = () => {
    return (
        <div className="row list list-dropped rounded-2 mt-1">
            <div className="col-2">
            <i class="fa-solid fa-arrow-rotate-left restore-icon"></i>
            </div>
            <div className="col-8">
                <p>content</p>
            </div> 
            <div className="col-2">
            <i class="fa-solid fa-trash-can delete-icon"></i>
            </div>
        </div>
    )
}

export default ListDropped