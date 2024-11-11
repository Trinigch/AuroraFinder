import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token.
  //Decodes the token and returns the user's profile information.
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }
  loggedIn() {
    // TODO: return a value that indicates if the user is logged in 
    //Returns true if the user is authenticated (valid token).
    const token = this.getToken();
    return token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    
    const decoded = jwtDecode<JwtPayload>(token);
    if (!decoded.exp) return true;
    const expirationTime = decoded.exp * 1000;
    return Date.now() > expirationTime;

  }

  getToken(): string {
    // TODO: return the token
   
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
 
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();
