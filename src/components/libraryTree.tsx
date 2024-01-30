import React, { useEffect, useRef, useState } from 'react';
import { Tree } from 'primereact/tree';
import { phraseGroups } from '@app/types/interfaces';
import TreeNode from 'primereact/treenode';
import {
  createPhraseGroup,
  deletePhraseGroup,
  mapLibs,
  updatePhraseGroup,
  updatePhraseGroupsOrder,
} from '@server/functions/functions';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';

const LibraryTree = ({
  libraries = [],
  setSelectedNode,
  libType,
  customProp,
}: {
  libraries?: phraseGroups[];
  setSelectedNode?: Function;
  libType?: string;
  customProp: string;
}) => {
  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [del, setDel] = useState(false);
  const [selectedNode, setSelectedNodeState] = useState<TreeNode | null>(null);
  const overlayPanelRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [addFolder, setAddFolder] = useState('');
  const [editedLabel, setEditedLabel] = useState<string>('');
  const [editname, setEditName] = useState<boolean>(false);

  const activateAddSubFolder = (selectedNode) => {
    setSelectedNodeState(selectedNode);
    setVisible(true);
  };

  const addSubFolder = () => {
    const input = {
      name: addFolder,
      // @ts-ignore
      organizationID: selectedNode.organizationID,
      // @ts-ignore
      phrasegroupID: selectedNode.key,
    };

    createPhraseGroup(input);
    setAddFolder('');
    setSelectedNodeState(null);
    setVisible(false);
  };

  const formatLibraryTree = () => {
    setNodes(mapLibs(libraries));
  };

  useEffect(() => {
    formatLibraryTree();
  }, []);
  const saveLabel = async () => {
    selectedNode.label = editedLabel;
    setEditName(false);
    const data = {
      id: selectedNode.key,
      name: selectedNode.label,
      phrasegroupID: selectedNode.phrasegroupID,
      // eslint-disable-next-line no-underscore-dangle
      _version: selectedNode._version,
    };
    const resp = await updatePhraseGroup(data);
  };
  const cancelLabel = () => {
    setEditName(false);
  };
  const nodeTemplate = (node: TreeNode) => {
    const nodeContent = (
      <div className="flex w-full">
        <Link to={`/library/${customProp}/${node.key}`}>
          <span
            onClick={() => setSelectedNode(node, libType)}
            className="p-ml-2 "
          >
            {node.label}
          </span>
        </Link>
        <i
          className="pi pi-ellipsis-h p-clickable"
          style={{ marginLeft: 'auto' }}
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          onClick={(e) => handleOptions(e, node)}
        ></i>
      </div>
    );
    const editContent = (
      <div className="grid w-full">
        <div className="col-8">
          <InputText
            type="text"
            value={editedLabel}
            onChange={(e) => setEditedLabel(e.currentTarget.value)}
            placeholder="Enter new label"
            className="p-inputtext-sm mx-1 w-full"
          />
        </div>

        <div className="col-4 flex justify-content-end align-items-center">
          <i className="text-sm pi pi-times" onClick={cancelLabel} />
          <i className="text-sm pi pi-check ml-2" onClick={saveLabel} />
        </div>
      </div>
    );
    return (
      <>
        {editname && selectedNode.label === node.label
          ? editContent
          : nodeContent}
      </>
    );
  };

  const handleOptions = (event: React.MouseEvent, node: TreeNode) => {
    overlayPanelRef.current.toggle(event);
    setEditName(false);
    setSelectedNodeState(node);
    setEditedLabel(node.label);
    console.log('optionss');
  };

  const onHideOverlayPanel = () => {
    overlayPanelRef.current.hide();
  };

  const handleEdit = () => {
    if (selectedNode) {
      setNodes([...nodes]);
      setEditName(true);
      onHideOverlayPanel();
    }
  };
  const handleDelete = (selectedNode) => {
    setSelectedNodeState(selectedNode);
    setDel(true);
  };
  const delFolders = () => {
    const input = {
      id: selectedNode.key,
      // @ts-ignore
      // eslint-disable-next-line no-underscore-dangle
      _version: selectedNode._version,
    };
    deletePhraseGroup(input);
    setSelectedNodeState(null);
    setDel(false);
  };

  const footerContent = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button label="Add" icon="pi pi-check" onClick={addSubFolder} autoFocus />
    </div>
  );
  const delFooter = (
    <div>
      <Button
        label="Cancel"
        icon=""
        onClick={() => setDel(false)}
        className="p-button-text"
      />
      <Button label="Delete" icon="" onClick={delFolders} autoFocus />
    </div>
  );

  const nodeDragged = (e) => {
    const { dragNode, dropNode } = e;
    updatePhraseGroupsOrder(dragNode, dropNode);
    setNodes(e.value);
  };

  return (
    <div>
      <Tree
        value={nodes}
        dragdropScope="demo"
        onDragDrop={(e) => nodeDragged(e)}
        filter
        filterMode="strict"
        filterPlaceholder="Search Library"
        className="border-none py-0"
        nodeTemplate={nodeTemplate}
        style={{ cursor: 'pointer', backgroundColor: '#f8f9fb' }}
      />
      <OverlayPanel
        ref={overlayPanelRef}
        dismissable
        onHide={onHideOverlayPanel}
        style={{ width: '169px' }}
        className="p-fluid"
      >
        {selectedNode && (
          <>
            <button
              className="bg-white-alpha-90 border-none cursor-pointer"
              onClick={handleEdit}
            >
              <i className="pi pi-pencil mr-2" />
              Edit name
            </button>
            <button
              className="bg-white-alpha-90 border-none mt-2 cursor-pointer"
              onClick={() => activateAddSubFolder(selectedNode)}
            >
              <i className="pi pi-plus mr-2" />
              Add Sub Folder
            </button>
            <button
              className="bg-white-alpha-90 border-none mt-2 text-400 cursor-pointer"
              onClick={handleEdit}
            >
              <i className="pi pi-ellipsis-h mr-2" />
              Move to
            </button>
            <button
              className="bg-white-alpha-90 border-none mt-2 cursor-pointer"
              onClick={handleEdit}
            >
              <i className="pi pi-lock mr-2" />
              Set Inactive
            </button>
            <button
              className="bg-white-alpha-90 border-none mt-2 cursor-pointer"
              onClick={handleEdit}
            >
              <i className="pi pi-eye mr-2" />
              Hide
            </button>
            <button
              className="bg-white-alpha-90 border-none mt-2 text-red-600 cursor-pointer"
              onClick={() => handleDelete(selectedNode)}
            >
              <i className="pi pi-trash mr-2" />
              Delete
            </button>
          </>
        )}
      </OverlayPanel>
      <Dialog
        header="Add Sub Folder"
        visible={visible}
        style={{ width: '30vw' }}
        onHide={() => setVisible(false)}
        footer={footerContent}
      >
        <InputText
          value={addFolder}
          onChange={(e) => setAddFolder(e.target.value)}
          placeholder="New Folder Name"
          className="w-full"
        />
      </Dialog>
      <Dialog
        header="Delete Folder"
        visible={del}
        style={{ width: '30vw' }}
        onHide={() => setDel(false)}
        footer={delFooter}
      >
        <div className="">
          <p> Do you want to delete this folder?</p>
        </div>
      </Dialog>
    </div>
  );
};

export default LibraryTree;
