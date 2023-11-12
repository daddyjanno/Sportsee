import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
`

const ToggleSwitch = styled.div`
    position: relative;
    width: 75px;
    display: inline-block;
    text-align: left;
    top: 8px;
`
const Input = styled.input`
    display: none;
    &:checked + .label .inner {
        margin-left: 0;
    }
    &:checked + .label .switch {
        right: 0px;
    }
`
const Label = styled.label`
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 0 solid #bbb;
    border-radius: 20px;
`
const InnerSpan = styled.span`
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease 0s;
    &::before,
    &::after {
        float: left;
        width: 50%;
        height: 36px;
        padding: 0;
        line-height: 36px;
        color: #fff;
        font-weight: bold;
        box-sizing: border-box;
    }
    &::before {
        content: 'YES';
        padding-left: 10px;
        background-color: #060;
        color: #fff;
    }
    &::after {
        content: 'NO';
        padding-right: 10px;
        background-color: #bbb;
        color: #fff;
        text-align: right;
    }
`
const SwitchSpan = styled.span`
    display: block;
    width: 24px;
    margin: 5px;
    background: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    border: 0 solid #bbb;
    border-radius: 20px;
    transition: all 0.3s ease 0s;
`

export { Container, ToggleSwitch, Input, Label, InnerSpan, SwitchSpan }
