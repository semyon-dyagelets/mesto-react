class API {
    constructor({ baseURL, token }) {
        this._baseURL = baseURL;
        this._token = token;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkResponse)
    }

    getInitialCards() {
        return fetch(`${this._baseURL}/cards`, {
            method: 'GET',
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkResponse)
    }

    editProfile(data) {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(this._checkResponse)
    }

    editAvatar(data) {
        return fetch(`${this._baseURL}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
            .then(this._checkResponse)
    }

    addCard(data) {
        return fetch(`${this._baseURL}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(this._checkResponse)
    }

    deleteCard(_id) {
        return fetch(`${this._baseURL}/cards/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            }
        })
            .then(this._checkResponse)
    }

    putLike(_id) {
        return fetch(`${this._baseURL}/cards/likes/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
            }
        })
            .then(this._checkResponse)
    }

    deleteLike(_id) {
        return fetch(`${this._baseURL}/cards/likes/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            }
        })
            .then(this._checkResponse)
    }
}

const api = new API({
    baseURL: 'https://mesto.nomoreparties.co/v1/cohort-19',
    token: '368fbfa6-0e9c-41c7-bd15-303b5b8d6ef8',
});

export default api;