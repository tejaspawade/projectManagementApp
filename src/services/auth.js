const SERVICE_API = `${import.meta.env.VITE_SERVICE_URL}`;

export async function loginUser(email, password) {
    const response = await fetch(`${SERVICE_API}/api/Auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Login failed');
    return response.json();
}

export async function registerUser(name, email, password) {
    const response = await fetch(`${SERVICE_API}/api/Auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
    });
    if (!response.ok) throw new Error('Registration failed');
    return response.json();
}