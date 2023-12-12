import axios from 'axios';

export const postFeedback = async (data, setPostResult, setIsPostLoading) => {
    var form_data = new FormData();

    for (var key in data) {
        form_data.append(key, data[key]);
    }

    await axios
        .post(`${process.env.REACT_APP_HOST_IP}/api/feedback`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
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
};
