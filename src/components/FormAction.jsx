export default function FormAction() {
    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        console.log(formData.get('name'));

        e.target.reset();
    }

    return (
        <>
            <h2>Form Action</h2>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" />
                <button type="submit" >Update</button>
            </form>
        </>
    );
}
