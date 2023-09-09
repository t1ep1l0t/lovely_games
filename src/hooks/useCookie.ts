export const getCookie = (name :string) :string | undefined => {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const updateCookie = (name: string, value: string) => {
    const cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    const path = '/';
    let expires = new Date;
    expires.setDate(expires.getDate() + 1);

    document.cookie = `${cookie}; path=${path}; expires=${expires.toUTCString()}`
}

export const removeCookie = (name: string) => {
    document.cookie = `${name}=; path=/; max-age=-1`;
}

