import { React } from 'react';
import { PageContainer } from '../skeleton/PageContainer';
import { Header } from '../elements/header/Header';
import { useGetWork } from '../../hooks/useGetWork';
import { WorkBody } from '../elements/work/WorkBody';
import { CircularProgress } from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const SingleWork = () => {
    const endpoint = window.location.pathname.substring(1);

    const { data, isLoading } = useGetWork(endpoint);

    return (
        <HelmetProvider>
            <Helmet>{!isLoading && <title>{data['topic']}</title>}</Helmet>
            <PageContainer>
                {!isLoading ? (
                    <>
                        <Header>{data['topic']}</Header>
                        <WorkBody data={data} />
                    </>
                ) : (
                    <div
                        style={{
                            height: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <CircularProgress style={{}} />
                    </div>
                )}
            </PageContainer>
        </HelmetProvider>
    );
};
