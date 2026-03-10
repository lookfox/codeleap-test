function DeleteModal({ onCancel, onConfirm }) {

  return (
    <div style={{
      position: "fixed",
      top:0,
      left:0,
      right:0,
      bottom:0,
      background:"rgba(0,0,0,0.5)",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>

      <div style={{
        background:"white",
        padding:"20px",
        borderRadius:"8px",
        width:"400px"
      }}>

        <h3>Are you sure you want to delete this item?</h3>

        <div style={{
          display:"flex",
          justifyContent:"flex-end",
          gap:"10px",
          marginTop:"20px"
        }}>

          <button onClick={onCancel}>
            Cancel
          </button>

          <button
            style={{background:"red", color:"white"}}
            onClick={onConfirm}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  )

}

export default DeleteModal