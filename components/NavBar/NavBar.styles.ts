import styled, { css } from 'styled-components';

export const StyledNavBar = styled.nav`
    min-height: 37px;
`;

export const StyledToLogo = styled.div`
    cursor: pointer;
    font-size: 22px;
    padding: 0 5px;
    white-space: nowrap;
    width: 72px;
    position: absolute;
    left: 20px;
    top: 2px;
    z-index: 99;
    &:hover {
        transition: 0.3s all;
        background-color: #0000e9;
    }
`;

export const StyledNavBtnsWrapper = styled.div`
    position: absolute;
    right: 4px;
    top: 0.5px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    z-index: 99;
    button {
        width: 42px;
        margin-left: 10px;
    }
`;

export const StyledNavsWrapper = styled.div<{ isopenedburger: string }>`
    padding: 0 110px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    border-bottom: 2px solid #f5f5f5;
    border-radius: 6px 6px 0 0;
    background-color: #00007c;
    button {
        margin-left: auto;
        &:first-child {
            display: none;
        }
    }
    @media (max-width: 539px) {
        button {
            &:first-child {
                display: block;
            }
        }
        flex-direction: column;
        overflow: hidden;
        ${({ isopenedburger }) =>
            isopenedburger === 'true'
                ? css`
                      position: absolute;
                      width: 100%;
                      z-index: 98;
                      height: auto;
                      gap: 5px;
                      text-align: center;
                      padding: 0;
                      & > * {
                          width: 100%;
                      }
                  `
                : css`
                      height: 37px;
                  `};
    }
`;
