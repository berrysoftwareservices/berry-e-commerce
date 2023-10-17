import styled from '@emotion/styled';

const Container = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Reason = styled('span')(() => ({
  marginTop: '10px',
}));

export default {
  Container,
  Reason,
};
