/* eslint-disable react/prop-types */
export const Loading = ({
    // eslint-disable-next-line react/prop-types
    isLoading,
    className = 'min-vh-50 d-flex',
    classNameText = 'text-black',
  }) => {
    if (!isLoading) return null;
  
    return (
      <div className={`${className} justify-content-center align-items-center`} data-testid="loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className={`ml-2 ${classNameText}`}>Loading...</p>
      </div>
    );
  };
  