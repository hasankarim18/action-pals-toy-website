import './Modal.css'

const Modal = ({setModalClose}) => {
    return (
      <div id="myModal" className="modal">
        <span onClick={()=> {setModalClose(false)}} className="close">&times;</span>
        <img
          src="https://www.w3schools.com/howto/img_snow.jpg"
          className="modal-content"
          id="img01"
        />
        <div id="caption"></div>
      </div>
    );
};

export default Modal;



/**

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}



 */