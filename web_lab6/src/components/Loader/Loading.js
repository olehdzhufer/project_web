import './Loading.styled.css'
export const Loader = () => {
    return (
        <div className="container">
            <div className="spinner-border custom-spinner" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}