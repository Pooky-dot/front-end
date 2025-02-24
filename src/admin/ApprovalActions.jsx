import React from 'react';
import { useRecordContext, useDataProvider, useNotify, useRefresh } from 'react-admin';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ApprovalActions = () => {
  const record = useRecordContext();
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const refresh = useRefresh();

  const handleUpdateStatus = (newStatus) => {
    if (!record) {
      notify("레코드가 로드되지 않았습니다.", 'warning');
      return;
    }
    dataProvider.update('adminProject', {
      id: record?.id || record?.projectId, // optional chaining 사용
      data: { ...record, status: newStatus },
    })
      .then(() => {
        notify(`상태가 ${newStatus}로 업데이트되었습니다.`);
        refresh();
      })
      .catch((error) => {
        notify(`업데이트 실패: ${error.message}`, 'warning');
      });
};


  return (
    <Box display="flex" justifyContent="flex-end" gap={2} mt={3}>
      <Button variant="contained" color="primary" onClick={() => handleUpdateStatus('active')}>
        승인
      </Button>
      <Button variant="contained" color="secondary" onClick={() => handleUpdateStatus('거절')}>
        거절
      </Button>
    </Box>
  );
};

export default ApprovalActions;
