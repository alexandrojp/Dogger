import React from 'react';


class FormSignUp extends React.Component {
    render() {
        return(
            <div>
                <h2>Sign Up</h2>
                <form>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">First Name</label>
                            <input type="text" className="form-control" name="first_name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" name="phone" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">Last Name</label>
                            <input type="text" className="form-control" name="first_name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-control" name="phone" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="">City</label>
                            <select name="city" className="form-control">
                                <option value="1">Guadalajara (Jalisco)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Address</label>
                            <textarea name="address" className="form-control" rows="2"></textarea>
                        </div>
                    </div>
                    <button type="button" className="btn bt-dog-primary">Guardar</button>
                    <button type="button" className="btn btn-secondary">Cancelar</button>
                </form>
            </div>
        )
    }
}

export default FormSignUp