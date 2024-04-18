function NotFound() {
  return (
    <div className="not-found">
      <h1>404: Page Not Found</h1>
      <p>Sorry, but the page you are looking for does not exist.</p>
      {/* <img src="https://via.placeholder.com/72x72" alt="Error" /> */}
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}

export default NotFound;
