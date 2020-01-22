import React, { Component } from 'react';

class AdmFlashcardPage extends Component {
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

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    }

    render() {
        return (
            <>
            <h1>Adm Flashcard</h1>
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Question</label>
                    <input
                        className="form-control"
                        name="question"
                        value={this.state.formData.question}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Correct Answer</label>
                    <input
                        className="form-control"
                        name="canswer"
                        value={this.state.formData.canswer}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Wrong Answer 1</label>
                    <input
                        className="form-control"
                        name="wanswer1"
                        value={this.state.formData.wanswer1}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Wrong Answer 2</label>
                    <input
                        className="form-control"
                        name="wanswer2"
                        value={this.state.formData.wanswer2}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Wrong Answer 3</label>
                    <input
                        className="form-control"
                        name="wanswer3"
                        value={this.state.formData.wanswer3}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn"
                    disabled={this.state.invalidForm}
                >
                    ADM FLASHCARD
                </button>
            </form>
            </>
        )
    }
};

export default AdmFlashcardPage;