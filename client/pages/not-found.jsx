import React from 'react';

const styles = {
  pageContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 3.5rem)'
  }
};

export default function NotFound() {
  return (
    <div style={styles.pageContent}>
      <div className="row">
        <div className="col text-center mb-5">
          <h3>
            Uh oh, we could not find the page you were looking for!
          </h3>
          <p className="text-muted">
            <a href="#">Return Home</a>
          </p>
        </div>
      </div>
    </div>
  );
}
