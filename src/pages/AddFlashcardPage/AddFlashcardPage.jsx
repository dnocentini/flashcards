import React, {Component} from 'react';

class AddFlashcardPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            question: "",
            canswer: "",
            wanswer1: "",
            wanswer2: "",
            wanswer3: ""
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddFlashcard(this.state.formData)
    }

    render () {
        return (
            <>
            Add Flashcard
            </>
        )
    }
}
export default AddFlashcardPage;