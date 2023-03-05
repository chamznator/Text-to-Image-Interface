import "./searchbar.css";



export default function Searchbar() {

return(


<>
<div className="introSection">
        <span className="titleW">
            IMAGEN
        </span>
        <span className="introMsg">
            Internet's largest source for AI visual collaboration
        </span>
    </div>
<div class="image-prompt-form-wrapper">
    
       
    <div class="image-prompt-form-header"><div>
        <div class="body-small">Enter a detailed description,</div>
        <button tabindex="0" class="btn btn-small btn-filled btn-secondary surprise-button" type="button">
            <span class="btn-label-wrap">
                <span class="btn-label-inner">Surprise me‍</span>
                </span>
                </button>
                </div>
                <div>
                    </div>
    </div>
    <div className="formWrapper">
        <form class="image-prompt-form desktop">
                            <input type="text" class="text-input text-input-medium text-input-outlined image-prompt-input" placeholder="An Impressionist oil painting of sunflowers in a purple vase…" maxlength="400">
                                </input>
                                <button  class="btn btn-disabled btn-disabled-style btn-large btn-filled btn-secondary image-prompt-btn" type="button">
                                    <span class="btn-label-wrap">
                                        <span class="btn-label-inner">Generate‍</span>
                                        </span>
                                        </button>
        </form>
    </div>    
</div>
<div class="create-page-upload mt-10 body-small">
        <span>Or, </span>
        <span role="button">
            <span class="link-style inline-link">upload an image</span>
        </span>
        <input type="file" accept="image/*" class="file-picker-input"></input>
         <span> to edit</span>
    </div>
    </>
)



}
  