import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import template from '../assets/ts-particles-snow.json';
import {css} from '@emotion/css'



export const App = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    const params = template as typeof template
    return (
        <Particles

        className={styles.particles}
        init={particlesInit}
        loaded={particlesLoaded}
        options={params as any}/>
    );
};

const styles={
    particles:css`
        position:absolute;
        width:100%;
        height:100%;
        z-index:-1;
    `
}