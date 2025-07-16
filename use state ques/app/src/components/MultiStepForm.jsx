import  { useState } from 'react';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function nextStep() {
    setStep(prev => prev + 1);
  }

  function prevStep() {
    setStep(prev => prev - 1);
  }

  return (
    <div >
      <h2>Multi-step Form</h2>

      {step === 1 && (
        <>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          /><br /><br />
          <button onClick={nextStep}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          /><br /><br />
          <button onClick={prevStep}>Back</button>{' '}
          <button onClick={() => alert("Submitted!")}>
            Submit 
          </button>
        </>
      )}
    </div>
  );
}

export default MultiStepForm;
