export const errorStatus = (err, msg) => {
    if (err) return <div className="alert alert-danger">{ msg}</div>
}

export const successStatus = (success, msg) => {
    if (success) return <div className="alert alert-success">{msg}</div>;
}

export const loadingStatus = loading => {
  if (loading) return <div className="alert alert-info">Loading...</div>;
};