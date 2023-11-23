import { Home } from '@/components/Home';
import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';

const IndexPage = () => {
    return (
        <SwitchPageAnimationProvider>
            <Home />
        </SwitchPageAnimationProvider>
    );
};

export default IndexPage;
