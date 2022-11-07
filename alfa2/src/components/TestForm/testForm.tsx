import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  // FormEventHandler,
  useState
 } from 'react';

export const TestForm = () => {

  const [name, setName] = useState("nix");

  const [answer, setAnswer] = useState('');

  // <Error | null> error kann ein Error oder null enhalten
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }


  const handleSubmit = async (
    // e: React.FormEvent<HTMLFormElement>
    e:FormEvent
  ): Promise<void> => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await submitForm(answer);
      setStatus('success');
    // } catch (err: any) {
    } catch (err: unknown) {  // unknown ist besser als any braucht aber dann bei setError den Type Cast
      setStatus('typing');
      // setError(err);
      setError(err as Error);
    }
  };

  // handler für textarea
  // const handleTextareaChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
  //   setAnswer(e.target.value);
  // }

  // oder als function
  function handleTextareaChange(e:ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(e.target.value);
  }
  


  // handler für normales input element
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  }

  const submitForm = (answer: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima'
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve();
        }
      }, 1500);
    });
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>

      <form onSubmit={handleSubmit}>
        <h2>TestForm</h2>
        <label>
          Textarea:<br />
          <textarea
            value={answer}
            onChange={handleTextareaChange}
            disabled={status === 'submitting'}
          />
        </label>
        <br />
        <label> Name:<br />
          <input
            type="text"
            // value={name}
            // defaultValue={testText}
            onChange={handleInputChange}
          />
        </label>

        <br /><br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
      <br />
      Status: {status}
      <br />
      Form Name: {name}
    </>
  )
}
