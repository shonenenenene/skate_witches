import Logo from '@/components/Pages/LogoPage';
import { StyledLoader } from '@/ui/Loader';
import { Suspense } from 'react';

const LogoPage = () => {
    return (
        <Suspense fallback={<StyledLoader />}>
            <Logo />
        </Suspense>
    );
};

export default LogoPage;
