import { useState } from "react";

const updateName = (name) => new Promise(resolve => setTimeout(() => resolve(name), 2000));

export default function UseTransition() {
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        setIsPending(true);

        await updateName(formData.get('name'));

        setIsPending(false);

        console.log('Submitted');

        e.target.reset();
    };

    return (
        <>
            <h2>useTransition</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" />
                <button disabled={isPending}>
                    Update
                </button>
            </form>
        </>
    );
}
