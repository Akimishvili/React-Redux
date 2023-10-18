import { useState } from 'react'
import './App.css'
import Counter from "./features/Counter.jsx";

function App() {

  return (
        <section className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Counter/>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default App
