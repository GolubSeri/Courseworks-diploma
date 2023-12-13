import axios from 'axios';

export const postFeedback = async (data, setPostResult, setIsPostLoading) => {
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === name + '=') {
                    cookieValue = decodeURIComponent(
                        cookie.substring(name.length + 1),
                    );
                    break;
                }
            }
        }
        return cookieValue;
    }

    var form_data = new FormData();

    for (var key in data) {
        form_data.append(key, data[key]);
    }

    try {
        await axios
            .post(`${process.env.REACT_APP_HOST_IP}/api/feedback`, data, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'X-CSRFToken': getCookie('csrftoken'),
                },
            })
            .then((response) => {
                if (response.status === 201) {
                    setPostResult('access');
                } else {
                    setPostResult('error');
                }
                setIsPostLoading(false);
            });
    } catch {
        setPostResult('error');
        setIsPostLoading(false);
    }
};
